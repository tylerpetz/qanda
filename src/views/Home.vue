<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Questionaire Builder
          </h1>
        </div>
      </div>
    </section>
    <NewSet />
    <EditSet />
    <ListSets />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NewSet from '@/components/QA/New.vue';
import EditSet from '@/components/QA/Edit.vue';
import ListSets from '@/components/QA/List.vue';

export default Vue.extend({
  name: 'home',
  components: {
    NewSet,
    EditSet,
    ListSets,
  },
});
</script>
