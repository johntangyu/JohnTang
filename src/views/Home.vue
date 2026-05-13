<template>
    <div class="header">
        <div id="name">
            <h1>John Tang</h1>
        </div>
    </div>
</template>


<script>
</script>

<style>
.header {
    display: flex; 
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    padding: 5px 50px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 1000px;
    min-width: 100px;
    margin: 10px auto;
}

#name {
    font-size: 1.5em;
    color: #4070ff;
    display: flex;
    justify-content: left;
    align-items: left;
    flex-direction: row;

}
</style>