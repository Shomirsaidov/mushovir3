<template>
    <div class="wrapper ">
    

        <div class="p-5 space-y-20">
            <div class="flex justify-between items-center">
                <div class="rounded-full">
                    <img src="../assets/profile-white.svg" width="36" alt="">
                </div>
                <img src="../assets/tjk.png" width="45" class="rounded-xl" alt="">
            </div>

            <div class="space-y-10">
                <h2 class="text-start font-bold text-white text-2xl ">Руз ба хайр, Лутфулло !</h2>

                <div class="flex bg-white items-center p-4 rounded-[23px] space-x-2 shadow shadow-white font-semibold">
                    <input placeholder="саволи ҳуқуқӣ е қонуни ҶТ" type="text" class="flex-1 outline-none">
                    <img src="../assets/search-black.svg" alt="">
                </div>
            </div>
        </div>

        <div class="bg-white rounded-t-[38px] p-4 pb-20">

            <div class="border rounded-lg mt-2">

                <div class="flex p-4 border-b items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <img src="../assets/bell.svg" alt="">
                        <div class="font-semibold">Иловаю тағйиротҳо</div>
                    </div>
                    <div class="rounded-full p-1 px-[10px] text-sm bg-red-400 text-white font-semibold">4</div>
                </div>

                <div class="flex p-4 border-b-1 items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <img src="../assets/settings.svg" alt="">
                        <div class="font-semibold">Танзимот</div>
                    </div>
                </div>


            </div>




            <div class="flex text-xs overflow-x-auto snap-x snap-mandatory gap-3 px-4 py-6 scroll-smooth scrollbar-hide">
                <div class="snap-start px-6 w-full space-y-3 border-2 flex flex-col items-center justify-center rounded-xl font-bold">
                    <img src="../assets/shield.svg" alt="">
                    <div >саломатии ҳуқуқӣ</div>
                </div>
                <div class="snap-start px-6 w-full space-y-3 border-2  flex flex-col items-center justify-center rounded-xl font-bold">
                    <img src="../assets/navigate.svg" alt="">
                    <div>қонунҳоро ҷустуҷу намоед</div>
                </div>
                <div class="snap-start px-6 w-full space-y-3 border-2  flex flex-col items-center justify-center rounded-xl font-bold">
                    <img src="../assets/docs.svg" alt="">
                    <div>ҳуҷҷатҳоро бисанҷед</div>
                </div>
                <div class="snap-start px-6 w-full space-y-3 border-2  flex flex-col items-center justify-center rounded-xl font-bold">
                    <img src="../assets/chat.svg" alt="">
                    <div>муошират бо мушовири мо</div>
                </div>
                <div class="snap-start px-6 w-full space-y-3 border-2  flex flex-col items-center justify-center rounded-xl font-bold">
                    <img src="../assets/test.svg" alt="">
                    <div>маърифати ҳуқуқиятро бисанҷ</div>
                </div>
                
            </div>


            <router-link to="/ai">
                <div class="flex items-center space-x-6 justify-center bg-gradient rounded-xl p-3 pb-0">
                    <img src="../assets/bot.svg" alt="">
                    <div class="text-start text-white text-lg font-semibold">Муаммое пеш омад ? <br> Бо ман маслиҳат кунед</div>
                </div>
            </router-link>

            



            
        </div>


    </div>


    

</template>


<script>

  export default {
      name: 'Home'
  }

</script>


<style>


.wrapper {
    background-image: url('../assets/wallpaper-main.png');
    background-size: cover;
    background-repeat: no-repeat;
}



</style>