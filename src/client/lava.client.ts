import { CollectionService } from "@rbxts/services";
import { killPlayer } from "shared/player.server";

for (const obj of CollectionService.GetTagged("Lava")) {
	if (obj.IsA("BasePart")) {
		obj.Touched.Connect((part) => {
			killPlayer(part.Parent?.FindFirstChildOfClass("Player"));
		});
	}
}
