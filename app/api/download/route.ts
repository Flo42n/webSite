import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";

export async function GET() {
    const filePath = path.join(process.cwd(), "public/files/rapport2.pdf");

    if (!fs.existsSync(filePath)) {
        return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new Response(fileBuffer, {
        headers: {
            "Content-Disposition": 'attachment; filename="sample.pdf"',
            "Content-Type": "application/pdf"
        }
    });
}
