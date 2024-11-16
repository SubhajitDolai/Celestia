import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";
 
// Uploads a file to tmpfiles.org and returns the URL to the uploaded file.
async function uploadFile(file: File) {
  const body = new FormData();
  body.append("file", file);
 
  const ret = await fetch("https://tmpfiles.org/api/v1/upload", {
    method: "POST",
    body: body,
  });
  return (await ret.json()).data.url.replace(
    "tmpfiles.org/",
    "tmpfiles.org/dl/"
  );
}
 
export default function App() {
  const {resolvedTheme} = useTheme()
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    uploadFile,
  });
 
  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} theme={resolvedTheme === 'dark' ? 'dark' : 'light'}/>;
}
