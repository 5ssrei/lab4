// 啟動小遊戲
function startQuiz(composer) {
    const questions = {
        beethoven: {
            question: "貝多芬是哪個時期的作曲家？",
            options: ["巴洛克時期", "古典時期", "浪漫時期"],
            answer: 2,
        },
        mozart: {
            question: "莫札特出生於哪個城市？",
            options: ["維也納", "薩爾茨堡", "柏林"],
            answer: 1,
        },
        chopin: {
            question: "蕭邦的國籍是？",
            options: ["法國", "波蘭", "奧地利"],
            answer: 1,
        },
        liszt: {
            question: "李斯特是什麼樂器的專家？",
            options: ["小提琴", "鋼琴", "大提琴"],
            answer: 1,
        },
    };

    // 取得對應作曲家的題目
    const quiz = questions[composer];
    if (!quiz) return;

    // 顯示問題
    const userAnswer = prompt(
        `${quiz.question}\n\n選項：\n0: ${quiz.options[0]}\n1: ${quiz.options[1]}\n2: ${quiz.options[2]}\n\n請輸入選項編號：`
    );

    // 檢查答案
    if (userAnswer == quiz.answer) {
        alert("恭喜你！答對了 🎉");
    } else {
        alert(`很遺憾，答錯了。\n正確答案是：${quiz.options[quiz.answer]}`);
    }
}
