def find_needle(haystack):
    if "needle" in haystack:
        index = haystack.index("needle")
        return "found the needle at position {index}"
    else:
        return "needle not found in the haystack"