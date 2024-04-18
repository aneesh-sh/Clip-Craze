import Button from "./Button"

const list = ["All","Gaming","Songs","Live","Cricket","Football","News","Cooking","Movies","Podcasts","Fashion","Entertainment"];

const ButtonList = () => {
  return (
    <div className="flex overflow-y-auto">
        <Button name="All"/>
        <Button name="Gaming"/>
        <Button name="Songs" />
        <Button name="Live"/>
        <Button name="Cricket"/>
        <Button name="Football"/>
        <Button name="News"/>
        <Button name="Cooking"/>
        <Button name="Movies"/>
        <Button name="News"/>
        <Button name="Cooking"/>
        <Button name="Movies"/>
    </div>
  )
}

export default ButtonList