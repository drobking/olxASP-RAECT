using Microsoft.EntityFrameworkCore.Migrations;

namespace Olx_finish.Migrations
{
    public partial class qwerty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tovars_AspNetUsers_UserAdditionalInfoId",
                table: "Tovars");

            migrationBuilder.DropIndex(
                name: "IX_Tovars_UserAdditionalInfoId",
                table: "Tovars");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Tovars");

            migrationBuilder.DropColumn(
                name: "UserAdditionalInfoId",
                table: "Tovars");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Tovars",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Tovars");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Tovars",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserAdditionalInfoId",
                table: "Tovars",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tovars_UserAdditionalInfoId",
                table: "Tovars",
                column: "UserAdditionalInfoId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tovars_AspNetUsers_UserAdditionalInfoId",
                table: "Tovars",
                column: "UserAdditionalInfoId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
