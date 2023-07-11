const codeSnippet = () => {
    return (
        <>
        {`import { useEffect, useState } from "react";

export default function CodeSnippet({projectDataPath}) {
    const [codeSnippet, setCodeSnippet] = useState(null);

    useEffect(() => {
        import(\`\${projectDataPath}\`)
            .then((module) => {
                setCodeSnippet(module.default);
            })
            .catch((error) => {
                console.log('There was an error importing the code snippet:', error);
            });

    }, [projectDataPath]);

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