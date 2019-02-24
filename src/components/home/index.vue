<template>
  <div>
    <nav class="clearfix">
      <div class="nav-wrapper">
        <button class="button button-primary" @click="createNew">Create New</button>
        <button class="button button-error" @click="logout">Logout</button>
      </div>
    </nav>
    <div class="card-wrapper">
      <card v-for="(item, index) in data" :key="index" :item="item" v-on:send="sendText"/>
      <div class="modal-mask clearfix" v-show="show" transition="modal">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <h3 v-if="edit">Edit Notes</h3>
            <h3 v-if="!edit">New Notes</h3>
          </div>
          <div class="modal-body">
            <form @submit.prevent="savePost">
              <label class="form-label">
                Title
                <input class="form-control" v-model="editData.title" required>
              </label>
              <label class="form-label">
                Description
                <textarea
                  class="form-control"
                  v-model="editData.description"
                  rows="4"
                  required
                ></textarea>
              </label>
              <div class="modal-footer text-right">
                <button type="submit" class="button button-primary" v-if="edit">Save</button>
                <button type="submit" class="button button-primary" v-if="!edit">Add</button>
                <button class="button button-error" @click="close">close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: 40px auto 0;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  // margin: 20px 0;
}

.text-right {
  text-align: right;
}

.form-label {
  display: block;
  margin-bottom: 1em;
}

.form-label > .form-control {
  margin-top: 0.5em;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.5em 1em;
  line-height: 1.5;
  border: 1px solid #ddd;
}

.modal-enter,
.modal-leave {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>


<script>
import card from "./card";
import data from "../../service/notes.json";

export default {
  components: {
    card
  },
  name: "home",
  mounted: function() {
    let store = JSON.parse(localStorage.getItem("data")) || data;
    this.saveData(store);
  },
  computed: {},
  data() {
    return {
      data: data,
      show: false,
      edit: false,
      editData: {}
    };
  },
  methods: {
    saveData(data) {
      this.data = data;
      localStorage.setItem("data", JSON.stringify(this.data));
    },
    sendText(item) {
      this.show = true;
      this.editData = { ...item };
      this.edit = true;
    },
    createNew() {
      this.show = true;
      this.editData = {};
      this.edit = false;
    },
    close() {
      this.show = false;
    },
    savePost() {
      if (!this.edit) {
        this.editData.id = this.editData.updated = new Date().getTime();
        this.data.push(this.editData);
      } else {
        this.editData["updated"] = new Date().getTime();

        for (let item = 0; item < this.data.length; item++) {
          if (this.data[item].id == this.editData.id) {
            this.data[item] = { ...this.editData };
          }
        }
      }
      this.saveData(this.data);
      this.show = false;
    },
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    }
  }
};
</script>
