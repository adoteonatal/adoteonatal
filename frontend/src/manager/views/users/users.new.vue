<template>
  <section>
    <h2 class="d-flex pb-3 pt-3 justify-content-between">
      Novo Usuário
      <router-link to="/admin/users" tag="a">
        <button type="button" class="btn btn-link">Voltar</button>
      </router-link>
    </h2>
    <form @submit.prevent="createUser" @keydown="form.errors.clear($event.target.name)">
      <div class="form-group">
        <label for="name">Nome:</label>
        <input v-model="form.name" type="text" id="name" name="name" class="form-control" placeholder="Digite seu nome">
        <small class="invalid-feedback" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></small>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="form.email" type="text" id="email" name="email" class="form-control" placeholder="Digite seu e-mail">
        <span class="invalid-feedback" v-if="form.errors.has('email')" v-text="form.errors.get('email')"></span>
      </div>

      <div class="form-group">
        <label for="username">Username:</label>
        <input v-model="form.username" type="text" id="username" name="username" class="form-control" placeholder="Digite seu nome de usuário">
        <span class="invalid-feedback" v-if="form.errors.has('username')" v-text="form.errors.get('username')"></span>
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input v-model="form.password" type="password" id="password" name="password" class="form-control" placeholder="Digite sua senha">
        <span class="invalid-feedback" v-if="form.errors.has('password')" v-text="form.errors.get('password')"></span>
      </div>

      <button type="submit" class="btn btn-primary" :disabled="form.errors.any()">Enviar</button>
    </form>
  </section>
</template>

<script>
  import Form from '../../../core/Form'
  import RequestService from '../../../core/RequestService'

  export default {
      name: 'usersNew',
      components: {

      },
      data() {
          return {
              form: new Form({
                  name:'',
                  email: '',
                  username: '',
                  password: '',
              }),
              requestService: new RequestService()
          }
      },
      methods: {
        createUser() {
          let user = this.form.data();

          this.requestService
            .create('users', user)
            .then(response => {
            	console.log('Hell yeah', response)
            })
            .catch(errors => {
              this.form.showErrors(errors);
            });
        }
      }
  }
</script>
