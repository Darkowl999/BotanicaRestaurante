/*function Auth(){
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
            if(this.errors.email === '' && this.errors.password === '')
            axios.post('http://localhost:3000/api/singin', {
                email: this.email,
                password: this.password
            }).then(function (response) {
                    console.log(response.data);
                    /!*
                    poner token en cookies
                     *!/
                 /!*keytar.setPassword(keytarService, keytarAccount, response.data.token).then();
                    const secret = keytar.getPassword(keytarService, keytarAccount);
                    secret.then((result) => {
                        console.log("result: "+ result); // result will be 'secret'
                    });*!/
                })
                .catch(error=> {
                    this.errors.response=error.response.data.errors[0].msg;
                    console.log(error.response.data.errors[0].msg);
                });
        }
    }
}*/

function users() {
  return {
      person: {
          name: null,
          email: null,
          address: null,
          city: null
      },
      init(){
          /*get*/
          fetch('https://jsonplaceholder.typicode.com/users/1')
              .then(response=> {
                  return response.json()
              }).then(data => this.person = {
              name: data.name,
              email: data.email,
              address: data.address.street,
              city: data.address.city
          })
      }
  }
}



function t(){
    return {
        email:'',
        password:'',
        login(){
            console.log(this.email);
            console.log(this.password);
            if(this.errors.email === '' && this.errors.password === '')
                axios.post('http://localhost:3000/usuarios', {
                    email: this.email,
                    password: this.password
                }).then(function (response) {
                   /*guardar token en cookies*/
                }).catch(error=> {
                    console.log(error.message);
                    });
        }
    }
}
