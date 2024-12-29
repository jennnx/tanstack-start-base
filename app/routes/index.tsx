import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: () => (
        <div className="text-4xl font-bold underline">Hello World</div>
    ),
});
