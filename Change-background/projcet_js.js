const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple','coral','taffy','punch','crepe']

function changeColor()
{
    const colorIndex= parseInt(Math.random()*colors.length)
    document.body.style.background = colors[colorIndex]
}