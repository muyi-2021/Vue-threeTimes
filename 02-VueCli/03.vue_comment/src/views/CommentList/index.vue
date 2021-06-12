<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none" v-show="!comments.length">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <CommentItem
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </ul>
  </div>
</template>

<script>
import CommentItem from "./CommentItem";
export default {
  name: "CommentList",
  data() {
    return {
      comments: [
        { id: 1, name: "闫海静", content: "华华我爱你!!" },
        { id: 2, name: "李沛华", content: "雷哥我爱你!!!" },
      ],
    };
  },
  components: {
    CommentItem,
  },
  mounted() {
    //绑定事件 接收数据(被修改)
    this.$bus.$on("addComment", this.addComment);
    this.$bus.$on("delComment", this.delComment);
  },
  beforeDestroy() {
    this.$bus.$off("addComment", this.addComment);
    this.$bus.$off("delComment", this.delComment);
  },
  methods: {
    addComment(name, content) {
      this.comments.unshift({ id: Date.now(), name, content });
    },
    delComment(id) {
      this.comments = this.comments.filter((comment) => {
        return comment.id !== id;
      });
    },
  },
};
</script>

<style>
</style>