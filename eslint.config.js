// @ts-check

import js from "@eslint/js";
import ts from "typescript-eslint";

export default ts.config(
    js.configs.recommended,
    ...ts.configs.recommended,
    {
        files: ["src/**/*"],
        rules: {
            indent: [
                "error",
                4
            ],
            quotes: [
                "error",
                "double"
            ],
            semi: [
                "error",
                "always"
            ]
        }
    }
);
