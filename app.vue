<script lang="ts" setup>

const items = [
  { title: "Junior Developer", content: "2017", stepCssClass: 'custom-step' },
  { title: "PHP Developer", content: "2018", stepCssClass: 'custom-step' },
  { title: "Software Developer", content: "2019", stepCssClass: 'custom-step' },
  { title: "Tech Leader", content: "2020", stepCssClass: 'custom-step' },
  { title: "Data Engineer Senior", content: "2021", stepCssClass: 'custom-step' },
  { title: "Data Governance Leader", content: "2022", stepCssClass: 'custom-step' },
];

const centered = true;

</script>

<template>
  <AppHero></AppHero>
  <div class="bg-[#FAFAFA] py-16 text-[#454B42]">
    <AppSection>
      <div class="md:grid grid-cols-3 gap-8 mb-16">
        <div class="w-full">
          <img src="~/assets/images/profile.jpeg" alt="">
        </div>
        <div class="w-full col-span-2 py-4">
          <h2 class="text-lg mb-8">Data Architect | Innovator | Team Leader.</h2>
          <p>
            Passionate about building scalable data solutions that drive business success.
            <br>6+ years of experience in the tech industry.
            <br>
            <br>Expertise in data architecture, data modeling, database management and data analytics.
            <br>
            <br>Strong leadership skills and a proven track record of success in managing complex projects.
            <br>
            <br>Innovative thinker with a passion for learning and sharing knowledge.
            <br>
            <br>Looking for a challenging opportunity to make a significant impact in a data-driven organization.
          </p>
        </div>
      </div>
      <div class="text-center">
        <vue-horizontal-timeline
          :items="items"
          timeline-background="#FAFAFA"
          line-color="#454B42"
          :title-centered="centered"
          title-class="custom-box"
          title-substr="30"
        />
      </div>
    </AppSection>
  </div>
</template>

<style>
.vue-horizontal-timeline{
  box-shadow: none !important;
}

.timeline {
  padding: 0 !important;
}

.custom-box {
  box-shadow: none !important;
  font-size: 1rem !important;
  margin-bottom: 0 !important;
}
.custom-box::before {
  content: none !important;
}

.custom-step::after {
  background: #000 !important;
}
</style>