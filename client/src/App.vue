<template>
  <div class="container">
    <div class="container2">
      <Header />
      <router-view />
    </div>
    <div id='pekka' class="body-bg-image" />
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  name: 'app',
  components: {
    Header,
  }
};
</script>

<style>
  :root {
    --primary-color: #344A5F;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background: var(--primary-color);
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    line-height: 1.6;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  .body-bg-no-image {
    background: var(--primary-color);
  }
  .body-bg-image {
    content: url("./assets/Pekka.png");
    float: right;
    background: var(--primary-color);
    z-index: -1;
    width: 325px;
    height: 325px;
  }
  .container {
    max-width: 100%;
    margin: 1rem auto;
    overflow: auto;
    padding: 0 2rem;
  }
  .container2{
    max-width: 80%;
    margin: 1rem auto;
    overflow: auto;
    padding: 0 2rem;
  }
  .form-group {
    margin: 1rem 0;
  }
  .search {
    background: rgba(0, 0, 0, 0.5);
    border: 4px #fff solid;
    margin-top: 1rem;
    padding: 2rem;
  }
  input,
  select,
  textarea {
    display: block;
    width: 100%;
    padding: 0.4rem;
    font-size: 1.2rem;
    border: 1px solid #ccc;
  }
  .btn {
    display: inline-block;
    background: var(--primary-color);
    color: #fff;
    padding: 0.4rem 1.3rem;
    border: none;
    cursor: pointer;
    outline: none;
    margin-top: 1rem;
  }
  @media (max-width: 700px) {
    body {
      background: var(--primary-color);
    }
  }
</style>
