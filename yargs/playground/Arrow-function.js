var square = (x) => x * x ;

console.log(square(4));

var user =
{

    name : 'ashlesh',
    sayhi : () => {
        console.log(arguments);
        console.log(` hi . i'm ${this.name}`);
        //hi . i'm undefined
        /*
                becoz her the arrow function does not  bind this\argv keyword to object 
                this  here search for parent ... here it does not exist 

                ...  hence  this goes for the gloabal object
        */
        
    },

    //resolving issue
    sayhiAlt () {
        console.log(arguments);
        console.log(` hi . i'm ${this.name}`);

    }
};
user.sayhi(1,2,3);
user.sayhiAlt(1,2,3);

