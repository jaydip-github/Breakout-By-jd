export default function PlayerStats(canvas,ctx,player) {
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(`Name :- ${player.name} Sidapara`, 20, 30);


  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(`level :- ${player.level}`, 300, 30);


  ctx.font = "20px Arial";
  let gap = 0;
  for (let i = 0; i < player.lives; i++) {
      ctx.fillText("❤️ ", canvas.width / 2 + gap, 30);
      gap += 30;
    }

    
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(`Score :- ${player.score}`, canvas.width - 140, 30);
}
