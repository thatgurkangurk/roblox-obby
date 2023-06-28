export function killPlayer(player: Player | undefined) {
	const humanoid = player?.Parent?.FindFirstChildOfClass("Humanoid");
	humanoid?.TakeDamage(humanoid.Health);
}
