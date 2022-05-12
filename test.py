with open("test.txt","w") as file:
    for i in range(len(names)):
        file.write("    {\n")
        file.write("        name:"+'"'+names[i]+'",'+"\n")
        file.write("        roll:"+'"'+rolls[i]+'",'+"\n")
        file.write("        present:"+str(0)+"\n")
        file.write("    },\n")