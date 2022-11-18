import React, { useEffect } from "react";

export default function useDocumentTitle(title = "Undangan") {
  useEffect(() => {
    document.title = title;
  }, []);
}
