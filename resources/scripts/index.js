import ShiftCipher from "./modules/shiftCipher.js";

const createCipher = () => {
    const shifAmount = Number(document.getElementById('shift').value);
    const cipher = new ShiftCipher(shifAmount);
    return cipher;
}

const getInputMsg = () => document.getElementById('input-message').value;

const diplayOutputMsg = (outputMsg) => document.getElementById('output-message').innerHTML = outputMsg;

const encrypt = () => {
    const inputMsg = getInputMsg();
    const cipher = createCipher();
    const outputMsg = cipher.encrypt(inputMsg);
    diplayOutputMsg(outputMsg);
}

const decrypt = () => {
    const inputMsg = getInputMsg();
    const cipher = createCipher();
    const outputMsg = cipher.decrypt(inputMsg);
    diplayOutputMsg(outputMsg);
}

const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
encryptBtn.addEventListener('click', encrypt);
decryptBtn.addEventListener('click', decrypt);
