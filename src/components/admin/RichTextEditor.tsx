"use client";

import { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";

type Props = {
  value: string;
  onChange: (html: string) => void;
};

function ToolbarButton({
  label,
  onClick,
  active,
  disabled,
}: {
  label: string;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={[
        "border rounded-md px-3 py-1 text-sm transition-colors",
        active
          ? "bg-[var(--gold)] text-black border-[var(--gold)]"
          : "bg-slate-900 text-slate-200 border-slate-700",
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-800",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

export default function RichTextEditor({ value, onChange }: Props) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder: "Write your post content…" }),
    ],
    content: value || "",
    editorProps: {
      attributes: {
        class:
          "richtext max-w-none min-h-[240px] focus:outline-none p-3 border rounded-b-md bg-slate-950 text-slate-100 border-slate-700",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    if ((value || "") !== (current || ""))
      editor.commands.setContent(value || "", false);
  }, [editor, value]);

  if (!editor) return null;

  return (
    <div className="border rounded-md bg-slate-950 text-slate-100 border-slate-700">
      <div className="flex flex-wrap gap-2 p-2 border-b border-slate-700 bg-slate-950 rounded-t-md">
        <ToolbarButton
          label="H1"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          active={editor.isActive("heading", { level: 1 })}
        />
        <ToolbarButton
          label="H2"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          active={editor.isActive("heading", { level: 2 })}
        />
        <ToolbarButton
          label="H3"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          active={editor.isActive("heading", { level: 3 })}
        />
        <ToolbarButton
          label="Bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive("bold")}
        />
        <ToolbarButton
          label="Italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive("italic")}
        />
        <ToolbarButton
          label="Quote"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          active={editor.isActive("blockquote")}
        />
        <ToolbarButton
          label="Bullets"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive("bulletList")}
        />
        <ToolbarButton
          label="Numbered"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive("orderedList")}
        />
        <ToolbarButton
          label="Link"
          onClick={() => {
            const currentUrl = editor.getAttributes("link").href as
              | string
              | undefined;
            const url = window.prompt("URL", currentUrl || "https://");
            if (!url) return;
            editor
              .chain()
              .focus()
              .extendMarkRange("link")
              .setLink({ href: url })
              .run();
          }}
          active={editor.isActive("link")}
        />
        <ToolbarButton
          label="Unlink"
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive("link")}
        />
        <ToolbarButton
          label="Undo"
          onClick={() => editor.chain().focus().undo().run()}
        />
        <ToolbarButton
          label="Redo"
          onClick={() => editor.chain().focus().redo().run()}
        />
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
