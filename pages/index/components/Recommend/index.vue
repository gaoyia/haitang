<template>
    <div class="ht-recommend met-news-bar">
        <div class="recommend news-list-md">
            <h3>为您推荐</h3>
            <ul class="list-group list-group-bordered">

                <li class="list-group-item"><a href="shownews.html" title="实木家具到底有哪些？" target="_self">实木家具到底有哪些？</a></li>

                <li class="list-group-item"><a href="shownews.html" title="实木家具开裂原因 分析及后期保养" target="_self">实木家具开裂原因
                        分析及后期保养</a></li>

                <li class="list-group-item"><a href="shownews.html" title="板材量大幅增加 实木家具成内销市场的“宠儿”" target="_self">板材量大幅增加
                        实木家具成内销市场的“宠儿”</a></li>

                <li class="list-group-item"><a href="shownews.html" title="实木家具成为卖场“新主角”" target="_self">实木家具成为卖场“新主角”</a>
                </li>

                <li class="list-group-item"><a href="shownews.html" title="家具气味大 通风是个好办法" target="_self">家具气味大 通风是个好办法</a>
                </li>

            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.ht-recommend {
    -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
    -o-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    -ms-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
}

.ht-recommend {
    padding: 30px;
    background: #ffffff;
    margin-bottom: 30px;
    overflow: hidden;
}

@media screen and (max-width:1024px) {
    .ht-recommend {
        padding: 10px;
        margin-bottom: 10px;
    }
}

.ht-recommend {
    padding: 10px;
    background: #ffffff;
    border-bottom: 1px solid #f0f2f5;
    margin-bottom: 30px;
    overflow: hidden;
}


/* 文章模块侧栏 */
.met-news-bar {
    padding: 20px;
    background: #ffffff;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    -o-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    -ms-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

@media (max-width: 991px) {
    .met-news-bar {
        margin-left: 0px;
        margin-top: 30px;
        padding: 30px;
    }
}

@media (max-width: 767px) {
    .met-news-bar {
        margin-left: 0px;
        margin-top: 0px;
        padding: 20px 15px;
    }
}

.met-news-bar ul.column {
    padding: 0px;
    list-style: none;
}

.met-news-bar ul.column li {
    margin-bottom: 10px;
}

.met-news-bar ul.column li a {
    font-size: 16px;
    color: #464646;
}

.met-news-bar ul.column li a:hover {
    color: #e4c17e;
}

.met-news-bar ul.column li a.active {
    color: #4e97d9;
    border-bottom: 1px solid;
}

.met-news-bar .recommend h3 {
    font-size: 18px;
    font-weight: 300;
    margin: 0px;
    border-left: 3px solid #e4c17e;
    text-indent: 1rem;
}

.met-news-bar .recommend .list-group {
    margin-top: 10px;
    margin-bottom: 0px;
}

.met-news-bar .recommend .list-group a {
    color: #464646;
    font-size: 15px;
}

.met-news-bar .recommend .list-group a:hover {
    color: #e4c17e;
}

.list-group {
    padding-left: 0;
    margin-bottom: 20px;
}

.met-news-bar .recommend .list-group {
    margin-top: 10px;
    margin-bottom: 0px;
}

.list-group-item {
    position: relative;
    display: block;
    padding: 10px 15px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid transparent;
}

.list-group-item:first-child {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}


.list-group-bordered .list-group-item {
    border-color: #e4eaec;
}
</style>