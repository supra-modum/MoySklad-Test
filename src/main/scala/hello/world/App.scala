package hello.world

import slinky.core._
import slinky.core.annotations.react
import slinky.web.ReactDOM
import slinky.web.html._
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

@JSImport("resources/App.css", JSImport.Default)
@js.native
object AppCSS extends js.Object

@JSImport("resources/logo.svg", JSImport.Default)
@js.native
object ReactLogo extends js.Object


// Component for basic list rendering through array items
// with direct value assignment to the <li>
 @react class ProductItemList extends StatelessComponent{
    case class Props(item: String)
    val ListArray = Array("Хлеб", "Гречка", "Спички", "Молоко", "Мыло")
      def render = {
        ul(
          li(ListArray(0)),
          li(ListArray(1)),
          li(ListArray(2)),
          li(ListArray(3)),
          li(ListArray(4))
        )
      }
    }

// But this should work another way:
// Creating list of tuples with two items, then looping through the pairs
// This should give an output of all list items

//  val products = List(("Хлеб", 80), ("Гречка", 150), ("Спички", 50), ("Молоко", 100), ("Мыло", 40))
//  for (product <- products) {
//    println(product._1, product._2, product._3, product._4, product._5)
//   }

//Final App structure

@react class App extends StatelessComponent {
  type Props = Unit

  private val css = AppCSS

  def render() = {
      div(className := "App")(
        div(className := "column col-12")(
          h1(className := "App-title")("МойCклад тестовое задание")
        ),
        div(className := "column col-9")(
          h2(className := "App-intro")("Список товаров")
        ),
        ProductItemList(item = "")
      )
  }
}
