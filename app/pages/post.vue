<template>
  <div class="flex flex-col gap-10 pb-10">
    <div>
      <UiSheet class="rounded-b-none">
        <!-- post body -->
        <article class="flex flex-col gap-6">
          <!-- post page top -->
          <div class="flex flex-col gap-4">
            <UiBreadcrumbs v-bind="breadcrumbs" />
            <h1 class="text-5xl font-semibold">{{ title }}</h1>
            <UserSection />
          </div>
          <!-- top end -->

          <!-- post page content -->
          <div class="post-content">
            <div class="rounded-md w-full max-h-screen overflow-hidden">
              <img
                :src="MOCK_IMAGES[0]"
                alt=""
                class="object-cover w-full h-full"
              />
            </div>
            <p>
              Сегодня мне хотелось бы предоставить твоему вниманию довольно
              интересный дизайн небольшой квартирки-студии в стиле лофт. Мне
              кажется, что стиль лофт как нельзя лучше подходит именно для
              квартир-студий (то есть для небольших квартирок). Благодаря своей
              самобытности этот стиль излишне не загромождает помещение
              ненужными предметами, да и в целом смотрится очень интересно.
              Сегодня мне хотелось бы предоставить твоему вниманию довольно
              интересный дизайн небольшой квартирки-студии в стиле лофт.
            </p>
            <h3 class="text-3xl font-semibold">Кухня-столовая</h3>
            <p>
              От перегородок отказались, зонирование условное, но при этом
              сохранена функциональность каждой зоны. Есть гостиная с уютным
              диваном и стеллажом, ТВ-стойка с функцией поворота, рабочая зона,
              спальня и кухня-столовая. «Чтобы избежать ломаных линий, мы
              привели всю встроенную мебель (стеллажная система, платяной шкаф и
              кухню) к одному горизонту и максимально сохранили высоту потолка в
              общих зонах. В таких апартаментах огромное количество инженерных
              разводок идет по потолку, но мне абсолютно не хотелось сложной,
              многоуровневой потолочной системы. За счет грамотной планировки
              удалось создать короба только в зонах корпусной мебели», —
              рассказывает Яна Ухова.
            </p>
            <div class="rounded-md w-full max-h-screen overflow-hidden">
              <img
                :src="MOCK_IMAGES[1]"
                alt=""
                class="object-cover w-full h-full"
              />
            </div>
            <p>
              Нужно было создать расслабленную, обволакивающую атмосферу, но с
              обязательным присутствием цвета. Правильно подобранная цветовая
              гамма — залог грамотного интерьера. «Объединяющими моментами стали
              цветовые сочетания: глубокий, «тягучий» зеленый оттенок и цвет
              светлого дерева прослеживаются и перекликаются в фасадах кухни и
              всей встроенной корпусной мебели, а также во фреске с изображением
              туманного леса в коридоре. Напольное покрытие — холодный голубой
              «шеврон» — также объединил пространство», — рассказывает дизайнер.
            </p>
            <h3 class="text-3xl font-semibold">Спальня</h3>
            <p>
              «Мне хотелось, чтобы в интерьере появилась вещь с историей: рядом
              с современной линейной кухней разместили буфет, который сразу стал
              центром притяжения. Буфет XIX века привезли из Ивановской области
              и с любовью отреставрировали. Так на первый взгляд ветхая и
              утратившая привлекательность вещь обрела новую жизнь и снова стала
              актуальной», — говорит дизайнер.
            </p>
            <div class="rounded-md w-full max-h-screen overflow-hidden">
              <img
                :src="MOCK_IMAGES[2]"
                alt=""
                class="object-cover w-full h-full"
              />
            </div>
            <p>
              Главным достоинством помещения является панорамное окно во всю
              стену, что, безусловно, дает много дневного света. Так как
              квартира имеет форму прямоугольника, требовалось разместить мебель
              таким образом, чтобы оставить максимально открытое пространство,
              не перекрывать его перегородками, даже облегченными.
            </p>
            <p>
              Корпусная мебель занимает практически всю стену до гостиной.
              Требовалось разместить платяной шкаф (3000 мм) с системами
              хранения. Несколько фасадных полотен сделали зеркальными для
              визуального увеличения пространства. Предусмотрена также
              стеллажная система с рабочим столом, с закрытой антресолью и
              нижними полками. Часть отведена под книги.
            </p>
          </div>
          <!-- content end -->

          <!-- post page bottom section -->

          <!--  -->
          <div class="flex justify-between items-center">
            <div class="flex gap-1">
              <UiSmallChip v-for="item in chips" :key="item" :label="item" />
            </div>
            <span class="text-base text-custom-secondary">{{ createdAt }}</span>
          </div>
          <!--  -->
          <CountersSection />
          <!--  -->

          <!--  -->
        </article>
        <!-- post body end -->
      </UiSheet>
      <UiSheet
        class="rounded-t-none border-t border-custom-divider flex flex-col gap-4"
      >
        <!-- flat-mini-preview -->
        <div class="flex gap-2">
          <div class="w-10.5 h-10.5 rounded-sm overflow-hidden">
            <img
              :src="flat.imageUrl"
              alt=""
              class="object-cover w-full h-full"
            />
          </div>
          <div>
            <p class="text-base font-semibold">{{ flat.name }}</p>
            <span class="text-base text-custom-secondary">{{
              flat.totalPostsCount
            }}</span>
          </div>
        </div>
        <!-- flat-mini-preview end-->

        <!-- posts navigation -->
        <div class="flex flex-col gap-2 lg:flex-row">
          <PostNavigationCard type="prev" v-bind="prevPost" />
          <PostNavigationCard type="next" v-bind="nextPost" />
        </div>
        <!-- posts navigation end -->

        <!-- user plate with subscribers counter -->
        <UserSection />
        <!-- user plate with subscribers counter end-->
      </UiSheet>
    </div>
    <!-- ads -->
    <UiSheet>
      <p class="text-2xl text-center">Здесь могла бы быть ваша реклама</p>
    </UiSheet>

    <UiSheet class="flex flex-col gap-6">
      <div class="flex justify-between items-center">
        <div class="flex gap-2">
          <h2 class="text-3xl font-semibold">Комментарии</h2>
          <span class="text-3xl font-semibold text-custom-secondary">12</span>
        </div>
      </div>
      <!-- comment form -->
      <CommentForm size="lg" />
      <!-- comment form end -->

      <CommentItem v-for="comment in comments" v-bind="comment" />
    </UiSheet>

    <!--  -->

    <RecommendedSection title="Рекомендуем ещё посмотреть" />
  </div>
</template>

<script setup lang="ts">
import { COMMENTS_MOCK, MOCK_IMAGES } from "~/const/mock";

const breadcrumbs = {
  home: { route: "/", label: "Лента" },
  items: [
    {
      route: "/popular",
      label: "Популярное",
    },
  ],
};

const title = "Как мы решились на лофт";

const chips = ["Студия", "Ремонт", "Лофт", "Квартира"];
const createdAt = "3 дня назад";

const flat = {
  imageUrl: MOCK_IMAGES[3],
  name: "Моя квартирка",
  totalPostsCount: 8,
};

const prevPost = {
  publishDate: "27 ноября",
  title:
    "Стиль лофт: что это такое простыми словами, особенности ремонта и интерьера квартиры",
  imageUrl: MOCK_IMAGES[4],
  href: "#",
} as const;

const nextPost = {
  publishDate: "Вчера",
  title: "Какие материалы лучше использовать в лофте",
  imageUrl: MOCK_IMAGES[5],
  href: "#",
} as const;

const comments = COMMENTS_MOCK;
</script>

<style scoped>
.post-content h2,
.post-content h3 {
  margin-bottom: 16px;
}

.post-content div,
.post-content p,
.post-content ul {
  margin-bottom: 24px;
}
</style>

