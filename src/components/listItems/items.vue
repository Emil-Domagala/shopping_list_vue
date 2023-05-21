<template>
  <li class="item" :class="{ done: isDone }">
    <div class="content-box">
      <div class="check-box-padding" @click="isDoneToggle">
        <div class="check-box">
          <font-awesome-icon icon="fa-check" class="font-awesome" />
        </div>
      </div>
      <div class="content">{{ prodName }}</div>
    </div>
    <div class="tool-box">
      <div class="edit-padding" @click="showEdit">
        <div class="edit-box">
          <font-awesome-icon icon="fa-pen" class="font-awesome" />
        </div>
      </div>
      <div class="delete-padding" @click="deleteItem">
        <div class="delete-box">
          <font-awesome-icon icon="fa-xmark" class="font-awesome" />
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    prodName: {
      required: false,
      type: String,
    },
    id: {
      required: false,
      type: String,
    },
  },
  data() {
    return {
      isDone: false,
    };
  },
  methods: {
    isDoneToggle() {
      if (this.isDone === false) {
        this.isDone = true;
        return;
      }
      this.isDone = false;
    },
    showEdit() {
      console.log('edit');
      // this.$store.dispatch('editItem', {
      //   id: this.id,
      //   prodName: this.prodName,
      // });
    },
    deleteItem() {
      this.$store.dispatch('deleteItem', this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@use '../../assets/colors';
.item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
  margin-bottom: 2rem;
  background-color: colors.$dark-bgc;
  .content-box,
  .tool-box {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .check-box-padding {
    padding: 10px;
    margin-right: 1rem;
    transition: background-color 0.4s;
    cursor: pointer;
    &:hover {
      background-color: colors.$main-bgc;
    }
    .check-box {
      position: relative;
      width: 25px;
      height: 25px;
      border: solid 2px colors.$dark-bgc;
      background-color: colors.$text-color;
      color: colors.$dark-bgc;
      border-radius: 50%;
      .font-awesome {
        display: none;
        position: absolute;
        bottom: -3px;
        color: colors.$done;
        font-size: 30px;
        pointer-events: none;
      }
    }
  }

  .content {
    padding: 1rem 0rem;
    font-size: 1.8rem;
  }

  .tool-box {
    .font-awesome {
      position: absolute;
      pointer-events: none;
    }
    .edit-padding {
      transition: background-color 0.4s, color 0.4s;
      &:hover {
        background-color: colors.$main-bgc;
        color: colors.$text-color;
      }
      .edit-box {
        position: relative;
        width: 25px;
        height: 25px;
        border: solid 2px colors.$dark-bgc;
        background-color: colors.$text-color;
        color: colors.$dark-bgc;
        border-radius: 50%;
        .font-awesome {
          bottom: 4px;
          left: 4px;
          font-size: 13px;
        }
      }
    }

    .delete-padding {
      transition: background-color 0.4s, color 0.4s;
      &:hover {
        background-color: colors.$main-bgc;
        color: colors.$text-color;
      }
      .delete-box {
        position: relative;
        width: 25px;
        height: 25px;
        border: solid 2px colors.$dark-bgc;
        background-color: colors.$text-color;
        color: colors.$dark-bgc;
        border-radius: 50%;
        .font-awesome {
          bottom: -1px;
          left: 4px;
          font-size: 22px;
        }
      }
    }
    .edit-padding,
    .delete-padding {
      padding: 10px;
      cursor: pointer;
    }
  }
}

.done {  
  text-decoration: line-through;
  .content-box {
    .check-box-padding {
      .check-box {
        .font-awesome {
          display: block;
        }
      }
    }
    .content {
      font-size: 1.4rem;
    }
  }
}

@media screen and (min-width: 992px) {
  .item {
    padding: 0.5rem 4rem;
  }
}
</style>
