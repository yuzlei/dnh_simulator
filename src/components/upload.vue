<script setup>
import {nextTick, ref} from 'vue'
import { ElUpload, ElMessage, ElIcon, genFileId } from 'element-plus'
import { Delete, Plus } from '@element-plus/icons-vue'
import 'element-plus/es/components/upload/style/css'
import 'element-plus/es/components/message/style/css'

const disabled = ref(false), upload = ref(null), base64 = ref("")

async function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(blob);
  });
}

const handleSuccess = async file => {
  if(file.raw.type === 'image/jpeg' || file.raw.type === 'image/png'){
    base64.value = await blobToBase64(file.raw);
    localStorage.setItem("image", base64.value)
    ElMessage.success({
      message: '上传成功',
      duration: 2000,
    })
  }else {
    ElMessage.error({
      message: '图片必须是 jpg 或 png 格式!',
      duration: 2000,
    })
    handleRemove()
  }
}

const handleRemove = () => upload.value.clearFiles()

const handleExceed = (files) => {
  handleRemove()
  const file = files[0]
  file.uid = genFileId()
  upload.value.handleStart(file)
}
</script>

<template>
<div class="content">
  <el-upload ref="upload" :limit="1" :on-exceed="handleExceed" accept=".jpg, .png" action="#" :on-change="handleSuccess" list-type="picture-card" :auto-upload="false">
    <ElIcon><Plus /></ElIcon>
    <template #file="{ file }">
      <div>
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
          >
            <ElIcon><Delete /></ElIcon>
          </span>
        </span>
      </div>
    </template>
  </el-upload>
</div>
</template>

<style scoped lang="scss">
div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>