"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { db, storage } from "@/firebase";
import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { deleteDoc, doc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

export function DeleteModal() {
  const { user } = useUser();
  const [isDeleteModalOpen, setIsDeleteModalOpen, fileId, setFileId] =
    useAppStore((state) => [
      state.isDeleteModalOpen,
      state.setIsDeleteModalOpen,
      state.fileId,
      state.setFileId,
    ]);

  async function deleteFile() {
    if (!user || !fileId) return;

    const fileRef = ref(storage, `users/${user.id}/files/${fileId}`);

    try {
      deleteObject(fileRef).then(async () => {
        console.log("Fichier du storage supprimé");
        deleteDoc(doc(db, "users", user.id, "files", fileId))
          .then(() => {
            console.log("Doc de firestore supprimé"!);
          })
          .finally(() => {
            setIsDeleteModalOpen(false);
          });
      });
    } catch (error) {
      setIsDeleteModalOpen(false);
      console.log(error);
    }
  }

  return (
    <Dialog
      open={isDeleteModalOpen}
      onOpenChange={(isOpen) => {
        setIsDeleteModalOpen(isOpen);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Êtes-vous sûr de vouloir supprimer ?</DialogTitle>
          <DialogDescription>
            Cette action est irréversible. Cela supprimera définitivement votre
            fichier !
          </DialogDescription>
        </DialogHeader>
        <div className="flex space-x-2 py-3"></div>
        <DialogFooter className="flex space-x-2 py-3">
          <Button
            size="sm"
            className="px-3 flex-1"
            variant={"ghost"}
            onClick={() => setIsDeleteModalOpen(false)}
          >
            <span className="sr-only">Annuler</span>
            <span>Annuler</span>
          </Button>

          <Button
            type="submit"
            size="sm"
            variant="destructive"
            className="px-3 flex-1 "
            onClick={() => deleteFile()}
          >
            <span className="sr-only">Supprimer</span>
            <span>Supprimer</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
