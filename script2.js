// โหลดข้อความเดิมจาก localStorage ทันทีเมื่อเปิดหน้า
window.onload = function () {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const ul = document.getElementById("something");

    savedTasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        ul.appendChild(li);
    });
};

function SendTask() {
    const inputBox = document.getElementById("input-box");
    const inputValue = inputBox.value.trim();

    if (inputValue !== "") {
        const ul = document.getElementById("something");
        const li = document.createElement("li");
        li.textContent = inputValue;
        ul.appendChild(li);

        // เคลียร์ input
        inputBox.value = "";

        // บันทึกลง localStorage
        let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        savedTasks.push(inputValue);
        localStorage.setItem("tasks", JSON.stringify(savedTasks));

        // เลื่อนลงไปที่ข้อความล่าสุด
        li.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function deleteTask() {
    const ul = document.getElementById("something");
    ul.innerHTML = "";

    // เคลียร์ localStorage ด้วย
    localStorage.removeItem("tasks");
}
