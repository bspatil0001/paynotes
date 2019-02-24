<template>
  <div>
    <div class="logo">PayNotes</div>
    <div class="login-block">
      <h1>Login</h1>
      <form @submit.prevent="login" autocomplete="off">
        <input
          type="text"
          v-model="loginInfo.username"
          placeholder="Username*"
          id="username"
          data-username
          required
        >
        <input
          type="password"
          v-model="loginInfo.password"
          placeholder="Password*"
          id="password"
          data-password
          required
        >
        <p class="error" v-if="showError">Enter valid username and password</p>
        <button id="submit" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.logo {
  margin: 30px auto;
  color: #fff;
  font-size: 36px;
  text-align: -webkit-center;
}
.login-block {
  width: 320px;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  border-top: 5px solid #ff656c;
  margin: 0 auto;
  h1 {
    text-align: center;
    color: #000;
    font-size: 18px;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 20px;
  }
  input {
    width: 100%;
    height: 42px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    font-size: 14px;
    padding: 0 20px 0 50px;
    outline: none;
    &#username {
      background: #fff url("http://i.imgur.com/u0XmBmv.png") 20px top no-repeat;
      background-size: 16px 80px;
    }
    &#username:focus {
      background: #fff url("http://i.imgur.com/u0XmBmv.png") 20px bottom
        no-repeat;
      background-size: 16px 80px;
    }
    &#password {
      background: #fff url("http://i.imgur.com/Qf83FTt.png") 20px top no-repeat;
      background-size: 16px 80px;
    }
    &#password:focus {
      background: #fff url("http://i.imgur.com/Qf83FTt.png") 20px bottom
        no-repeat;
      background-size: 16px 80px;
    }
    &:active,
    &:focus {
      border: 1px solid #ff656c;
    }
  }

  button {
    width: 100%;
    height: 40px;
    background: #ff656c;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #e15960;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
    outline: none;
    cursor: pointer;
    &:hover {
      background: #ff7b81;
    }
  }
  .error {
    margin: 0 0 10px;
    color: #ff0000;
  }
}
</style>

<script>
export default {
  name: "login",
  data() {
    return {
      loginInfo: {
        username: "",
        password: ""
      },
      showError: false
    };
  },
  methods: {
    login: function() {
      if (
        this.loginInfo.username === "user@example.com" &&
        this.loginInfo.password === "1234"
      ) {
        localStorage.setItem("authToken", "123");
        this.$router.push({ name: "Home" });
      } else {
        this.showError = true;
      }
    }
  }
};
</script>
