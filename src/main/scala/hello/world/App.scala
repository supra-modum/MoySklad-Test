package hello.world

import slinky.core._
import slinky.core.annotations.react
import slinky.web.ReactDOM
import slinky.web.html.{i, _}
import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

@JSImport("resources/App.css", JSImport.Default)
@js.native
object AppCSS extends js.Object

@JSImport("resources/logo.svg", JSImport.Default)
@js.native
object ReactLogo extends js.Object


//Stateless React component for basic <li> items rendering through Array items
@react class MyComponent extends StatelessComponent{
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
        MyComponent(item = "test")
      )
  }
}
