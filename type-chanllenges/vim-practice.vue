<template>
  <div>
    <!-- TODO: 12删除、修改、复制标签 dit -->
    {{msg}}
  </div>
</template>

<script>
export default {
  // TODO: 1. 修改 HelloWorld ciw
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup () {
    // TODO: 2. 修改泛型 ci<
    // TODO: 3. 删除泛型 di< da<
    const count = ref<number>(0)
    const foo = () => {
      // TODO: 5.删除括号里的内容di( 或者 dib
      console.log('foo')
    }
    // TODO: 6.删除或修改数组里的内容 di[ 或 ci[
    const arr = [1,2,3,4,5,6]
    // TODO: 7. 删除或修改模板字符串的内容 di` ci`
    const templateString = `foo${arr}`
    // TODO: 8. 删除两行2dd
    const a = 12
    const b = 5
    // TODO: 9. 删除到、修改到、复制到s
    // vim is awesome
    const msg = ref('hello world')
    // TODO: 4. 删除返回值 di{ 或 diB
    return {
      // TODO: 10. 删除到、修改到、 复制到开头 ^ / 结尾 $
      templateString,
      msg
      // TODO: 11. 删除、 修改、复制整个文件
    }
  }
}
</script>

<style lang="scss" scoped>
.hello-world {
  color: red
}
</style>