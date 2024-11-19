function rolldice()
{
    const input=document.getElementById("myinput").value
    const result=document.getElementById("result")
    const diceimages=document.getElementById("diceimages")

    let values=[];
    let images=[];
    for(let i=0;i<input;i++)
    {
        const value=Math.floor(Math.random()*6)+1;
       values.push(value)
       images.push(`<img src="dice_images/${value}.png">`)
        
    }
    result.textContent=values.join(", ")
    diceimages.innerHTML=images.join(" ")
}