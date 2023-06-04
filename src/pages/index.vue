<script setup>
import Header from "@/components/Header/index.vue";
import BannerSlide from "@/components/BannerSlide/index.vue";
import Publicity from "@/components/Publicity/index.vue";
import Solutions from "@/components/Solutions/index.vue";
import Invitation from "@/components/Invitation/index.vue";
import Introduction from "@/components/Introduction/index.vue";
import Footer from "@/components/Footer/index.vue";
</script>

<template>
  <div class="index-page">
    <Header />
    <div class="overflow-hidden">
      <BannerSlide />
      <Publicity />
      <Solutions />
      <Invitation />
      <Introduction />
      <Footer />
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
