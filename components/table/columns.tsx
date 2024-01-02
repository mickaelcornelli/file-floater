"use client";

import { COLOR_EXTENSION_MAP } from "@/constant";
import { FileType } from "@/typing";
import { ColumnDef } from "@tanstack/react-table";
import prettyBytes from "pretty-bytes";
import { FileIcon, defaultStyles } from "react-file-icon";

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ renderValue, ...props }) => {
      const type = renderValue() as string;
      const extension: string = type.split("/")[1];

      if (extension === "x-icon") {
        // Gérer l'affichage pour 'x-icon'
        return (
          <div>
            <FileIcon
              extension={extension}
              labelColor={"#000"}
              // @ts-ignore
              {...defaultStyles[extension]}
            />
          </div>
        );
      }

      return (
        <div className="w-10">
          <FileIcon
            extension={extension}
            labelColor={COLOR_EXTENSION_MAP[extension]}
            // @ts-ignore
            {...defaultStyles[extension]}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "filename",
    header: "Nom du fichier",
  },
  {
    accessorKey: "timestamp",
    header: "Date de création",
  },
  {
    accessorKey: "size",
    header: "Taille",
    cell: ({ renderValue, ...props }) => {
      return <span>{prettyBytes(renderValue() as number)}</span>;
    },
  },
  {
    accessorKey: "downloadURL",
    header: "Lien",
    cell: ({ renderValue, ...props }) => (
      <a
        href={renderValue() as string}
        target="_blank"
        className="underline text-blue-500 hover:text-blue-600"
      >
        Télécharger
      </a>
    ),
  },
];
