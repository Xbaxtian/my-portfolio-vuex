<script lang="ts" setup>

const items = [
  { title: "Job 1" },
  { title: "Job 2" },
  { title: "Job 3" },
  { title: "Job 4" },
  { title: "Job 5" },
  { title: "Job 6" },
]

</script>

<template>
  <AppHero></AppHero>
  <AppSection>
    <div class="md:grid grid-cols-3 gap-3 mb-8">
      <div class="w-full">
        foto
      </div>
      <div class="w-full col-span-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut laudantium voluptatem totam doloremque eaque, quod sapiente nisi quam nulla quas ipsam? Quidem provident hic a illum quisquam. Autem, perferendis!
      </div>
    </div>
    <div class="text-center">
      <vue-horizontal-timeline :items="items" />
    </div>
  </AppSection>
</template>
