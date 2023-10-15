function User() {
    this.verified = true;
}

const user = new User();
const admin = Object.create(user);

const clone1 = { ...admin };
const clone2 = Object.assign({}, admin);

console.log(admin.verified, clone1.verified, clone2.verified);

// The admin object obviously has its verified property set to true because it uses the user as its 
// prototype. But, as you can see, none of the clones has the verified property. 
// This is because both the …spread operator and Object.assign ignore the prototype when cloning.