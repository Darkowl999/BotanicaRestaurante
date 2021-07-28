function Auth(){
    return {
        ci: 'h',
        name: '',
        email: '',
        password: '',
        phone_number: '',
        role: '',
        state: '',
        errors: {
            name: '',
            email: '',
            password: '',
            response:'',
        },
        validateEmail() {
            if (!validator.isEmail(this.email)) {
                this.errors.email =  stringAuth.email;
            } else {
                this.errors.email = '';
            }
        },
        validatePassword() {
            if (!validator.isLength(this.password,{min:8, max: undefined})) {
                this.errors.password = stringAuth.password;
            } else {
                this.errors.password = '';
            }
        },
        login(){
            /*const secret = keytar.getPassword(keytarService, keytarAccount);
            console.log(keytarAccount)
            secret.then((result) => {
                console.log("result: "+ result); // result will be 'secret'
            });*/
            if(this.errors.email === '' && this.errors.password === '')
            axios.post('http://localhost:3000/api/singin', {
                email: this.email,
                password: this.password
            })
                .then(function (response) {
                    console.log(response.data);
                 /*   keytar.setPassword(keytarService, keytarAccount, response.data.token).then();
                    const secret = keytar.getPassword(keytarService, keytarAccount);
                    secret.then((result) => {
                        console.log("result: "+ result); // result will be 'secret'
                    });*/
                })
                .catch(error=> {
                    this.errors.response=error.response.data.errors[0].msg;
                    console.log(error.response.data.errors[0].msg);
                });
        }
    }
}

