//Key values of a and b
let a = 17;
let b = 20;

function encryptMessage(msg)
{
	///Cipher Text initially empty
	let cipher = ""; 
	for (let i = 0; i < msg.length; i++)
	{
		// Avoid space to be encrypted 
		if(msg[i] !=' ') 
			/* applying encryption formula ( a x + b ) mod m
			{here x is msg[i] and m is 26} and added 'A' to 
			bring it in range of ascii alphabet[ 65-90 | A-Z ] */
			cipher = cipher + String.fromCharCode((((a * (msg[i].charCodeAt(0)-65) ) + b) % 26) + 65);
		else
			//else simply append space character
			cipher += msg[i];	 
	}
	return cipher;
}

function decryptCipher(cipher)
{
	let msg = "";
	let a_inv = 0;
	let flag = 0;
	
	//Find a^-1 (the multiplicative inverse of a 
		//in the group of integers modulo m.) 
	for (let i = 0; i < 26; i++)
	{
		flag = (a * i) % 26;
		
		//Check if (a*i)%26 == 1,
				//then i will be the multiplicative inverse of a
		if (flag == 1)
		{ 
			a_inv = i;
		}
	}
	for (let i = 0; i < cipher.length; i++)
	{
		if(cipher[i]!=' ')
			/*Applying decryption formula a^-1 ( x - b ) mod m 
			{here x is cipher[i] and m is 26} and added 'A' 
			to bring it in range of ASCII alphabet[ 65-90 | A-Z ] */
			msg = msg + String.fromCharCode(((a_inv * ((cipher[i].charCodeAt(0)+65 - b)) % 26)) + 65);
		else
			//else simply append space character
			msg += cipher[i]; 
	}

	return msg;
}

//Driver Program
let msg = "AFFINE CIPHER";

//Calling encryption function
let cipherText = encryptMessage(msg);
console.log("Encrypted Message is : " + cipherText);

//Calling Decryption function
console.log("Decrypted Message is: " + decryptCipher(cipherText));