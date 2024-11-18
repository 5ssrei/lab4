$(document).ready(function () {
    // 小測驗題目
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

    // 啟動測驗功能
    $(".quiz-btn").click(function () {
        const composer = $(this).attr("onclick").match(/'([^']+)'/)[1];
        const quiz = questions[composer];

        if (quiz) {
            const userAnswer = prompt(
                `${quiz.question}\n\n選項：\n0: ${quiz.options[0]}\n1: ${quiz.options[1]}\n2: ${quiz.options[2]}\n\n請輸入選項編號：`
            );

            if (userAnswer == quiz.answer) {
                alert("恭喜你！答對了 🎉");
            } else {
                alert(`很遺憾，答錯了。\n正確答案是：${quiz.options[quiz.answer]}`);
            }
        }
    });

    // jQuery 特效：點擊圖片後添加動畫
    $(".composer-image").click(function () {
        $(this).animate(
            {
                opacity: 0.5,
                width: "80%",
            },
            500,
            function () {
                $(this).animate({ opacity: 1, width: "100%" }, 500);
            }
        );
    });
});
