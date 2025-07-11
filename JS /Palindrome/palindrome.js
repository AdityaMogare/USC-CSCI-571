window.onload = function () {
    const input = document.getElementById("input");
    const result = document.getElementById("result");

    window.check = function () {
        const value = input.value.trim();

        if (value === "") {
            result.textContent = "⚠️ Please enter some text.";
            return;
        }

        const cleaned = value.toLowerCase().replace(/[^a-z0-9]/g, '');

        if (isPalindrome(cleaned)) {
            result.textContent = `✅ "${value}" is already a palindrome.`;
        } else {
            const fixed = makePalindrome(cleaned);
            result.textContent = `❌ "${value}" is not a palindrome.\n✅ Closest palindrome by appending: "${fixed}"`;
        }
    };

    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }

    function makePalindrome(str) {
        for (let i = 0; i < str.length; i++) {
            const prefix = str.substring(0, i);
            const candidate = str + reverse(prefix);
            if (isPalindrome(candidate)) {
                return candidate;
            }
        }
        return str + reverse(str); // fallback
    }

    function reverse(s) {
        return s.split('').reverse().join('');
    }
};
