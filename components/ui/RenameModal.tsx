"use client";

import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "./input";
import { Button } from "./button";
import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";

function RenameModal() {
  const { user } = useUser();
  const [input, setInput] = useState("");

  const [isRenameModalOpen, setIsRenameModalOpen, fileId, filename] =
    useAppStore((state) => [
      state.isRenameModalOpen,
      state.setIsRenameModalOpen,
      state.fileId,
      state.filename,
    ]);

  const renameFile = async () => {
    if (!user || !fileId) return;

    const toastId = toast.loading("Renommage....");

    try {
      await updateDoc(doc(db, "users", user.id, "files", fileId), {
        filename: input,
      });

      toast.success("Votre fichier a été renommé", {
        id: toastId,
      });

    } catch (error) {
      setIsRenameModalOpen(false);
      console.log(error);
    } finally {
      setInput("");
      setIsRenameModalOpen(false);
    }
  };

  return (
    <Dialog
      open={isRenameModalOpen}
      onOpenChange={(isOpen) => {
        setIsRenameModalOpen(isOpen);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="pb-2">Renommer le fichier</DialogTitle>
          <Input
            id="link"
            defaultValue={filename}
            onChange={(e) => setInput(e.target.value)}
            onKeyDownCapture={(e) => {
              if (e.key === "Enter") {
                renameFile();
              }
            }}
          />

          <div className="flex justify-end space-x-2 py-3">
            <Button
              size="sm"
              className="px-3"
              variant={"ghost"}
              onClick={() => setIsRenameModalOpen(false)}
            >
              <span className="sr-only">Annuler</span>
              <span>Annuler</span>
            </Button>

            <Button
              type="submit"
              size="sm"
              className="px-3 hover:bg-[#15ff9d] hover:text-[#070707]"
              onClick={() => renameFile()}
            >
              <span className="sr-only">Renommer</span>
              <span>Renommer</span>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default RenameModal;
