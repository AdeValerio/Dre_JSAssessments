/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const arr_NFT = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (pname, pcolor, pface, paccessories, phand) {
    const obj_NFT = {
        "name": pname,
        "color": pcolor,
        "face": pface,
        "accessories": paccessories,
        "hand": phand
    }
    arr_NFT.push(obj_NFT);
    console.log("NFT minted: " + pname);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(i = 0; i < arr_NFT.length; i++){
        console.log("\nID: \t\t"+ (i+1));
        console.log("Name: \t\t"+ arr_NFT[i].name);
        console.log("Color: \t\t"+ arr_NFT[i].color);
        console.log("Face: \t\t"+ arr_NFT[i].face);
        console.log("Accessories:"+ arr_NFT[i].accessories);
        console.log("Handsign: \t"+ arr_NFT[i].hand);
        console.log("------------------------------------")
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFTs: " + arr_NFT.length)
}

// call your functions below this line

mintNFT("Smiling","Yellow","Smile","Sunglasses","None");
mintNFT("Sad","White","Sad-crying","None","None");
mintNFT("Like","Yellow","None","None","Thumbs-up");
mintNFT("Dislike","Yellow","None","None","Thumbs-down");
listNFTs();
getTotalSupply();
