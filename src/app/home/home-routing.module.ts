import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "tabs",
    component: HomePage,
    children: [
      {
        path: "basic",
        children: [
          {
            path: "",
            loadChildren:
              "../basic-home/basic-home.module#BasicHomePageModule"
          },
          {
            path: "study",
            loadChildren:
              "../basic-study/basic-study.module#BasicStudyPageModule"
          },
          {
            path: "result",
            loadChildren:
              "../result/result.module#ResultPageModule"
          },
          {
            path: "review",
            loadChildren:
              "../basic-review/basic-review.module#BasicReviewPageModule"
          },
          {
            path: "quiz",
            loadChildren: "../basic-quiz/basic-quiz.module#BasicQuizPageModule"
          },
          {
            path: "quiz/a",
            loadChildren: "../a-quiz/a-quiz.module#AQuizPageModule"
          },
          {
            path: "quiz/ka",
            loadChildren: "../ka-quiz/ka-quiz.module#KaQuizPageModule"
          },
          {
            path: "quiz/sa",
            loadChildren: "../sa-quiz/sa-quiz.module#SaQuizPageModule"
          },
          {
            path: "quiz/ta",
            loadChildren: "../ta-quiz/ta-quiz.module#TaQuizPageModule"
          },
          {
            path: "quiz/na",
            loadChildren: "../na-quiz/na-quiz.module#NaQuizPageModule"
          },
          {
            path: "quiz/ma",
            loadChildren: "../ma-quiz/ma-quiz.module#MaQuizPageModule"
          },
          {
            path: "quiz/ha",
            loadChildren: "../ha-quiz/ha-quiz.module#HaQuizPageModule"
          },
          {
            path: "quiz/ra",
            loadChildren: "../ra-quiz/ra-quiz.module#RaQuizPageModule"
          },
          {
            path: "quiz/ya",
            loadChildren: "../ya-quiz/ya-quiz.module#YaQuizPageModule"
          },
          {
            path: "quiz/wa",
            loadChildren: "../wa-quiz/wa-quiz.module#WaQuizPageModule"
          },
          {
            path: "hiragana",
            loadChildren: "../hiragana-chart/hiragana-chart.module#HiraganaChartPageModule"
          },
          {
            path: "a",
            loadChildren: "../a-basic/a-basic.module#ABasicPageModule"
          },
          {
            path: "ka",
            loadChildren: "../ka-basic/ka-basic.module#KaBasicPageModule"
          },
          {
            path: "sa",
            loadChildren: "../sa-basic/sa-basic.module#SaBasicPageModule"
          },
          {
            path: "ta",
            loadChildren: "../ta-basic/ta-basic.module#TaBasicPageModule"
          },
          {
            path: "ha",
            loadChildren: "../ha-basic/ha-basic.module#HaBasicPageModule"
          },
          {
            path: "ma",
            loadChildren: "../ma-basic/ma-basic.module#MaBasicPageModule"
          },
          {
            path: "na",
            loadChildren: "../na-basic/na-basic.module#NaBasicPageModule"
          },
          {
            path: "ra",
            loadChildren: "../ra-basic/ra-basic.module#RaBasicPageModule"
          },
          {
            path: "ya",
            loadChildren: "../ya-basic/ya-basic.module#YaBasicPageModule"
          },
          {
            path: "wa",
            loadChildren: "../wa-basic/wa-basic.module#WaBasicPageModule"
          },
        ]
      },
      {
        path: "advanced",
        children: [
          {
            path: "",
            loadChildren:
              "../advance-home/advance-home.module#AdvanceHomePageModule"
          },{
            path: "ga",
            loadChildren:
              "../ga-advanced/ga-advanced.module#GaAdvancedPageModule"
          },
          {
            path: "za",
            loadChildren:
              "../za-advanced/za-advanced.module#ZaAdvancedPageModule"
          },
          {
            path: "da",
            loadChildren:
              "../da-advanced/da-advanced.module#DaAdvancedPageModule"
          },
          {
            path: "ba",
            loadChildren:
              "../ba-advanced/ba-advanced.module#BaAdvancedPageModule"
          },
          {
            path: "pa",
            loadChildren:
              "../pa-advanced/pa-advanced.module#PaAdvancedPageModule"
          },
          {
            path: "kya",
            loadChildren:
              "../kya-advanced/kya-advanced.module#KyaAdvancedPageModule"
          },
          {
            path: "gya",
            loadChildren:
              "../gya-advanced/gya-advanced.module#GyaAdvancedPageModule"
          },
          {
            path: "sha",
            loadChildren:
              "../sha-advanced/sha-advanced.module#ShaAdvancedPageModule"
          },
          {
            path: "ja",
            loadChildren:
              "../ja-advanced/ja-advanced.module#JaAdvancedPageModule"
          },
          {
            path: "cha",
            loadChildren:
              "../cha-advanced/cha-advanced.module#ChaAdvancedPageModule"
          },
          {
            path: "nya",
            loadChildren:
              "../nya-advanced/nya-advanced.module#NyaAdvancedPageModule"
          },
          {
            path: "hya",
            loadChildren:
              "../hya-advanced/hya-advanced.module#HyaAdvancedPageModule"
          },
          {
            path: "bya",
            loadChildren:
              "../bya-advanced/bya-advanced.module#ByaAdvancedPageModule"
          },
          {
            path: "pya",
            loadChildren:
              "../pya-advanced/pya-advanced.module#PyaAdvancedPageModule"
          },
          {
            path: "mya",
            loadChildren:
              "../mya-advanced/mya-advanced.module#MyaAdvancedPageModule"
          },
          {
            path: "rya",
            loadChildren:
              "../rya-advanced/rya-advanced.module#RyaAdvancedPageModule"
          },
          {
            path: "hiragana",
            loadChildren:
              "../advanced-hiragana-chart/advanced-hiragana-chart.module#AdvancedHiraganaChartPageModule"
          },
          {
            path: "quiz/ga",
            loadChildren:
              "../ga-quiz/ga-quiz.module#GaQuizPageModule"
          },
          {
            path: "quiz/za",
            loadChildren:
              "../za-quiz/za-quiz.module#ZaQuizPageModule"
          },
          {
            path: "quiz/da",
            loadChildren:
              "../da-quiz/da-quiz.module#DaQuizPageModule"
          },
          {
            path: "quiz/ba",
            loadChildren:
              "../ba-quiz/ba-quiz.module#BaQuizPageModule"
          },
          {
            path: "quiz/pa",
            loadChildren:
              "../pa-quiz/pa-quiz.module#PaQuizPageModule"
          },
          {
            path: "quiz/kya",
            loadChildren:
              "../kya-quiz/kya-quiz.module#KyaQuizPageModule"
          },
          {
            path: "quiz/gya",
            loadChildren:
              "../gya-quiz/gya-quiz.module#GyaQuizPageModule"
          },
          {
            path: "quiz/sha",
            loadChildren:
              "../sha-quiz/sha-quiz.module#ShaQuizPageModule"
          },
          {
            path: "quiz/cha",
            loadChildren:
              "../cha-quiz/cha-quiz.module#ChaQuizPageModule"
          },
          {
            path: "quiz/ja",
            loadChildren:
              "../ja-quiz/ja-quiz.module#JaQuizPageModule"
          },
          {
            path: "quiz/nya",
            loadChildren:
              "../nya-quiz/nya-quiz.module#NyaQuizPageModule"
          },
          {
            path: "quiz/hya",
            loadChildren:
              "../hya-quiz/hya-quiz.module#HyaQuizPageModule"
          },
          {
            path: "quiz/bya",
            loadChildren:
              "../bya-quiz/bya-quiz.module#ByaQuizPageModule"
          },
          {
            path: "quiz/pya",
            loadChildren:
              "../pya-quiz/pya-quiz.module#PyaQuizPageModule"
          },
          {
            path: "quiz/mya",
            loadChildren:
              "../mya-quiz/mya-quiz.module#MyaQuizPageModule"
          },
          {
            path: "quiz/rya",
            loadChildren:
              "../rya-quiz/rya-quiz.module#RyaQuizPageModule"
          },
          {
            path: "study",
            loadChildren:
              "../advance-study/advance-study.module#AdvanceStudyPageModule"
          },
          {
            path: "review",
            loadChildren:
              "../advance-review/advance-review.module#AdvanceReviewPageModule"
          },
          {
            path: "result",
            loadChildren:
              "../advanced-results/advanced-results.module#AdvancedResultsPageModule"
          },
          {
            path: "quiz",
            loadChildren:
              "../advance-quiz/advance-quiz.module#AdvanceQuizPageModule"
          },
        ]
      },
      {
        path: "",
        redirectTo: "/home/tabs/basic",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/home/tabs/basic",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
