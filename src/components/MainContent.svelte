<script lang="ts">
  const CONTENT = {
    SKILLS: 'SKILLS',
    PROJECTS: 'PROJECTS',
  } as const;

  let currentTab: keyof typeof CONTENT;
  $: currentTab = CONTENT.PROJECTS;
</script>

<div class="container">
  <div class="option-wrapper">
    <button type="button" class:selected={currentTab === CONTENT.SKILLS} on:click={() => (currentTab = CONTENT.SKILLS)}>
      {CONTENT.SKILLS}
    </button>
    <button
      type="button"
      class:selected={currentTab === CONTENT.PROJECTS}
      on:click={() => (currentTab = CONTENT.PROJECTS)}
    >
      {CONTENT.PROJECTS}
    </button>
  </div>
  <div class={currentTab === CONTENT.PROJECTS ? 'displayed' : 'hidden'}>
    <slot name="projects-tab" />
  </div>
  <div class={currentTab === CONTENT.SKILLS ? 'displayed' : 'hidden'}>
    <slot name="skills-tab" />
  </div>
</div>

<style>
  .hidden {
    content-visibility: hidden;
  }

  .displayed {
    content-visibility: visible;
  }

  .container {
    flex-grow: 1;
    padding: 2rem;
    background-color: var(--bg-secondary);
  }

  .option-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    user-select: none;
  }

  .option-wrapper > button {
    cursor: pointer;
    background-color: transparent;
    font-size: 1.2rem;
    color: var(--t-subdue);
    margin: 0;
    padding: 0 1rem;
    border: none;
    border-bottom: 2px solid #e8e8e8;
  }

  .option-wrapper > button:hover,
  .option-wrapper > button:focus {
    border-bottom: 2px solid #888;
    color: #888;
    outline: none;
  }

  .option-wrapper > button.selected {
    border-bottom: 2px solid #0070f3;
    color: #0070f3;
  }

  .option-wrapper > button:focus-visible {
    background-color: #f3f3f3;
    outline: none;
  }

  /* Mobile View */
  @media only screen and (max-width: 1150px) {
    .container {
      margin-left: 0;
    }
  }
</style>
