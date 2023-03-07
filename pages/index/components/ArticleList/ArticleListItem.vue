<template>
    <div class="media-box">
        <div class="media">
            <div class="media-left">
                <a href="shownews.html" title="实木家具到底有哪些？" target="_self">
                    <img class="media-object" src="/assets/img/articleCover.jpg" style="" alt="实木家具到底有哪些？">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">
                    <a href="shownews.html" title="实木家具到底有哪些？" target="_self">
                        实木家具到底有哪些？
                    </a>
                </h4>
                <p class="des">正在打算购买家具的朋友可能有这样的经历，面对淋漓满目的家具，面对A品牌说实木家具，B品牌说纯实木家具...</p>
                <p class="info">
                    <span>2017-09-15</span>
                    <span>admin</span>
                    <!-- <span><i class="icon wb-eye margin-right-5" aria-hidden="true"></i>324</span> -->
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.media-box {
    border-bottom: 1px solid #f0f2f5;
    padding-bottom: 30px;
    margin-bottom: 30px;
}

.media {
    overflow: hidden;
    zoom: 1;
    margin-top: 15px;
}

.media:first-child {
    margin-top: 0;
}

.media-left,
.media>.pull-left {
    padding-right: 10px;
}

.media-body,
.media-left,
.media-right {
    display: table-cell;
    vertical-align: top;
}

.media-left,
.media>.pull-left {
    padding-right: 20px;
}

.media-object {
    display: block;
    width: 200px;
}




.media-lg .media-object {
    width: 160px;
}

.media,
.media-body {
    overflow: hidden;
    zoom: 1;
}

.media-body {
    width: 10000px;
}

.media-body,
.media-left,
.media-right {
    display: table-cell;
    vertical-align: top;
}

.media-body {
    overflow: auto;
}


@media screen and (min-width: 768px) {
    .media-body {
        overflow: hidden;
    }
}

.media-heading {
    margin-top: 0;
    margin-bottom: 5px;
}

.media-box h4 {
    margin: 0 0 10px;
    font-size: 18px;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #444;
    -webkit-transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}

.media-box h4:hover {
    color: #e4c17e;
}

@media (max-width: 768px) {
    .media-box h4 {
        margin-bottom: 10px;
    }

    .media-object {
        width: 120px;
    }
}



.media-box p {
    font-size: 16px;
    font-size: 12px;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.media-box p.des {
    color: #6a6a6a;
    margin-bottom: 10px;
    font-size: 13px;
}

.media-box p.info {
    margin-bottom: 0px;
    font-size: 14px;
    font-weight: 300;
    color: #a3afb7;
}

.media-box p.info span:first-child {
    margin: 0;
}

.media-box p.info span {
    margin-left: 10px;
}

.media-box p.info i {
    color: #a3afb7;
    font-weight: 300;
}

@media (max-width: 512px) {
    .media-box h4 {
        font-size: 14px;
        margin-bottom: 10px;
    }

    .media-box p {
        font-size: 12px;
    }

    .media-object {
        width: 120px;
    }
}
</style>