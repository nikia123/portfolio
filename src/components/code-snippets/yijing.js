const codeSnippet = () => {

    return (
        <>
{`
// resulting hexagram function, display initial hexagram changing images, 
// display changing line text tags (<p> & <span>), and generates newHexagram[] for return. 
// takes in initialHexagramList[](filled with initial hexagram values) and changingLineList[](filled with changing line values). 
// places base value of initial hexagram if the same position in the changing list is false, 
// flips the value into the new list if the changing list value is true 

function findHexagramResult(initialHexagramList, changingLineList) {

    let newHexagram = [];
    

    for (let i in changingLineList) {
        if (changingLineList[i]) {
            newHexagram[i] = (!initialHexagramList[i])      

            switch (i) {
                case '0':
                    initialSixth.src = displayChangingLines(initialHexagramList[i]);
                    sixthLineChanging.style.display = 'block'
                    sixthParentTag.style.display = 'block'                
                    break;

                case '1':
                    initialFifth.src = displayChangingLines(initialHexagramList[i]);
                    fifthLineChanging.style.display = 'block'
                    fifthParentTag.style.display = 'block'
                    break;
                
                case '2':
                    initialFourth.src = displayChangingLines(initialHexagramList[i]);
                    fourthLineChanging.style.display = 'block'
                    fourthParentTag.style.display = 'block'
                    break;
                
                case '3':
                    initialThird.src = displayChangingLines(initialHexagramList[i]);
                    thirdLineChanging.style.display = 'block'
                    thirdParentTag.style.display = 'block'
                    break;

                case '4':
                    initialSecond.src = displayChangingLines(initialHexagramList[i])
                    secondLineChanging.style.display = 'block'
                    secondParentTag.style.display = 'block'
                    break;
                
                case '5':
                    initialFirst.src = displayChangingLines(initialHexagramList[i]);
                    firstLineChanging.style.display = 'block';
                    firstParentTag.style.display = 'block';
                    break;
            }

        }
        else {
            newHexagram[i] = initialHexagramList[i];
        }
    }

    return newHexagram;

}
`}
        </>
    )
}

export default codeSnippet