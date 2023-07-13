const codeSnippet = () => {
    return (
        <>
        {`import { useEffect, useState } from "react";

export default function CodeSnippet({projectData}) {
    const [codeSnippet, setCodeSnippet] = useState(null);

    useEffect(() => {
        import(\`\${projectData['path']}\`)
            .then((module) => {
                setCodeSnippet(module.default);
            })
            .catch((error) => {
                console.log('There was an error importing the code snippet:', error);
            });

    }, [projectData]);

    return(
        <pre>
            <code>
                {codeSnippet}
            </code>
        </pre>
    );
}`}
        </>
    );
}

export default codeSnippet;