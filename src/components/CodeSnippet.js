import { useEffect, useState } from "react";

export default function CodeSnippet({projectData}) {
    const [codeSnippet, setCodeSnippet] = useState(null);

    useEffect(() => {
        import(`${projectData["code"]}`)
            .then((module) => {
                setCodeSnippet(module.default);
            })
            .catch((error) => {
                console.log('There was an error importing the code snippet:', error);
            });

    }, [projectData]);

    return(
        <pre className="text-sm whitespace-pre-wrap break-words my-6 lg:text-lg mb-16">
            <code>
                {codeSnippet}
            </code>
        </pre>
    );
}