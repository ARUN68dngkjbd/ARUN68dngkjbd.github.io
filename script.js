let xp = 0;
let level = 1;

function gainXP() {
  xp += 20;

  if (xp >= 100) {
    xp = 0;
    level++;
    document.getElementById("level").innerText = level;
    unlockSkill();
  }

  document.getElementById("xp").style.width = xp + "%";
}

function unlockSkill() {
  const skills = document.getElementById("skills");
  
  if (level === 2) {
    let newSkill = document.createElement("li");
    newSkill.innerText = "🔓 Java (Unlocked!)";
    skills.appendChild(newSkill);
  }
}